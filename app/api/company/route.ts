import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Получение информации о компании
export async function GET() {
  try {
    const companyInfo = await prisma.companyInfo.findFirst();
    return NextResponse.json(companyInfo);
  } catch (error) {
    console.error('Error fetching company info:', error);
    return NextResponse.json(
      { message: 'Ошибка при получении информации о компании' },
      { status: 500 }
    );
  }
}

// Создание или обновление информации о компании
export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Получаем существующую запись
    const existingInfo = await prisma.companyInfo.findFirst();

    if (existingInfo) {
      // Обновляем существующую запись
      const updatedInfo = await prisma.companyInfo.update({
        where: { id: existingInfo.id },
        data,
      });
      return NextResponse.json(updatedInfo);
    } else {
      // Создаем новую запись
      const newInfo = await prisma.companyInfo.create({
        data: {
          name: "ИП Зеленский Иван Сергеевич",
          inn: "490903484583",
          ogrnip: "", // Нужно добавить реальный ОГРНИП
          address: "", // Нужно добавить реальный адрес
          phone: "", // Нужно добавить контактный телефон
          email: "", // Нужно добавить email
          description: "Кофейня и пекарня",
          workingHours: "Ежедневно с 8:00 до 22:00",
          instagram: null,
          vk: null,
          telegram: null,
          whatsapp: null,
        },
      });
      return NextResponse.json(newInfo);
    }
  } catch (error) {
    console.error('Error updating company info:', error);
    return NextResponse.json(
      { message: 'Ошибка при обновлении информации о компании' },
      { status: 500 }
    );
  }
} 