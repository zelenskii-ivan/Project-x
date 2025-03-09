'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CompanyInfoData {
  name: string;
  inn: string;
  ogrnip: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  workingHours: string;
  instagram: string | null;
  vk: string | null;
  telegram: string | null;
  whatsapp: string | null;
}

export default function CompanyInfo() {
  const [info, setInfo] = useState<CompanyInfoData | null>(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await fetch('/api/company');
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (!info) {
    return null;
  }

  return (
    <section className="py-16 bg-mocha-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-serif text-mocha-darker mb-8 text-center">
            О нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-mocha-darker mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-3">
                  <p className="text-mocha-dark">
                    <span className="font-medium">Название:</span> {info.name}
                  </p>
                  <p className="text-mocha-dark">
                    <span className="font-medium">Телефон:</span>{' '}
                    <a href={`tel:${info.phone}`} className="hover:text-mocha-warm">
                      {info.phone}
                    </a>
                  </p>
                  <p className="text-mocha-dark">
                    <span className="font-medium">Email:</span>{' '}
                    <a href={`mailto:${info.email}`} className="hover:text-mocha-warm">
                      {info.email}
                    </a>
                  </p>
                  <p className="text-mocha-dark">
                    <span className="font-medium">Адрес:</span> {info.address}
                  </p>
                  <p className="text-mocha-dark">
                    <span className="font-medium">Часы работы:</span> {info.workingHours}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-mocha-darker mb-4">
                  Юридическая информация
                </h3>
                <div className="space-y-3">
                  <p className="text-mocha-dark">
                    <span className="font-medium">ИНН:</span> {info.inn}
                  </p>
                  <p className="text-mocha-dark">
                    <span className="font-medium">ОГРНИП:</span> {info.ogrnip}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-mocha-darker mb-4">
                  О компании
                </h3>
                <p className="text-mocha-dark">{info.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-mocha-darker mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="flex space-x-4">
                  {info.instagram && (
                    <a
                      href={info.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mocha-dark hover:text-mocha-warm"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {info.vk && (
                    <a
                      href={info.vk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mocha-dark hover:text-mocha-warm"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.547 7.016c.15.447 0 .775-.679.775h-2.24c-.57 0-.834.293-1.001.617 0 0-1.17 2.85-2.825 4.7-.536.536-.78.706-1.072.706-.15 0-.369-.17-.369-.617V7.016c0-.549-.154-.775-.6-.775H9.045c-.334 0-.535.255-.535.497 0 .521.78.642.86 2.107v3.18c0 .697-.126.824-.4.824-.78 0-2.676-2.864-3.802-6.14C4.947 6.463 4.733 6.24 4.16 6.24H1.92c-.617 0-.74.293-.74.617 0 .577.78 3.438 3.627 7.215 1.9 2.58 4.576 3.976 7.013 3.976 1.459 0 1.64-.328 1.64-.894v-2.061c0-.657.138-.788.6-.788.34 0 .923.17 2.284 1.483 1.554 1.554 1.811 2.252 2.686 2.252h2.24c.617 0 .926-.328.748-.976-.195-.607-.895-1.486-1.823-2.53-.505-.596-1.262-1.24-1.491-1.562-.34-.437-.243-.63 0-1.018 0 0 2.799-3.943 3.088-5.28z"/>
                      </svg>
                    </a>
                  )}
                  {info.telegram && (
                    <a
                      href={info.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mocha-dark hover:text-mocha-warm"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  )}
                  {info.whatsapp && (
                    <a
                      href={info.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mocha-dark hover:text-mocha-warm"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 