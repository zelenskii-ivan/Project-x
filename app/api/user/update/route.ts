import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Не авторизован' },
        { status: 401 }
      );
    }

    const { name, email, phone, address, birthDate } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Имя и email обязательны' },
        { status: 400 }
      );
    }

    // Проверяем, не занят ли email другим пользователем
    if (email !== session.user.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return NextResponse.json(
          { message: 'Этот email уже используется' },
          { status: 400 }
        );
      }
    }

    // Обновляем данные пользователя
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        email,
        phone,
        address,
        birthDate: birthDate ? new Date(birthDate) : null,
      },
    });

    return NextResponse.json({
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        address: updatedUser.address,
        birthDate: updatedUser.birthDate,
      },
    });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { message: 'Произошла ошибка при обновлении профиля' },
      { status: 500 }
    );
  }
} 