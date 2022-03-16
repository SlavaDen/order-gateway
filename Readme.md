# Order Gateway

## Описание

---

Интерфейс для отправки виртуальных чеков клиентам.
Отправка доступна по SMS и Email.

### Страницы интерфейса

В интерфейсе 3 страницы:

1. Форма ввода контактной информации для отправки чека
   URL: /Уникальный индентификатор заказа
2. Страница успешного подтверждения контактной информации
   URL: /confirmation-success
3. Заказ не найден. При проверке заказа на удаленном сервере заказ не был найден
   URL: /order/not-found

## Техническое описание

---

### Конфигурация

Конфигурация находится в config/config.json
Параметры:
{
"APIBaseURL":"Базовый URL удаленного сервера",
"APICheckOrderURL":"URL для проверки существования заказа, без базового URL",
"APIConfirmationContactOrderURL":"URL для подтверждения контактной информации, без базового URL",
"APIrequestTimeout":"Timeout для обращений на удаленный сервер"
}

### Хостинг

Для хостинга на сервере, нужно сбилдить проект.
Создание билда происходит по схеме:

1. Скачиваем и устанавливаем Node JS с официального сайта.
   (Если он установлен, шаг пропускаем)
2. Скачиваем и устанавливаем менеджер пакетов NPM
   (Если он установлен, шаг пропускаем. Если установлен Node JS, NPM ставится автоматически)
3. Открываем терминал, переходим в корневую директорию проекта.
   Выполняем команду для установки зависимостей проекта:
   npm install
4. Если вы сделали все действия и настроили конфигурацию проекта.
   Выполняем команду:
   npm run build
5. После выполнения команды, в корневой директории проекта появится папка build.
   В ней будет готовый build проекта, папку можно переименовать
6. Переносим папку с готовым билдом на виртуальный сервер (Если это нужно) и публикуем проект
7. Для корректной работы интерфейса нужно перенаправлять все запросы на / или /index.html

Пример web.config для ISS:
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
  <rewrite>
    <rules>
      <rule name="ReactRouter Routes" stopProcessing="true">
        <match url=".*" />
        <conditions logicalGrouping="MatchAll">
          <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          <add input="{REQUEST_URI}" pattern="^/(docs)" negate="true" />
        </conditions>
        <action type="Rewrite" url="index.html" />
      </rule>
    </rules>
  </rewrite>
</system.webServer>
</configuration>
