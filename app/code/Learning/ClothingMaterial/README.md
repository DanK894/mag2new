Практика 7 How to Add a New Product Attribute
https://devdocs.magento.com/videos/fundamentals/add-new-product-attribute/
https://www.youtube.com/watch?v=mZNBENRgC1E
Добавление атрибута продукта - одна из самых популярных операций как в Magento 1, так и в Magento 2. Атрибуты - мощный
способ решения многих практических задач, связанных с продуктом.
Это довольно обширная тема, но в этом видео мы обсудим простой процесс добавления атрибута раскрывающегося типа к
продукту.
Для этого упражнения предположим, что установлен образец данных.
Мы добавим атрибут clothing_material с возможными значениями: Cotton, Leather, Silk, Denim, Fur и Wool.
Мы сделаем этот атрибут видимым на странице просмотра продукта жирным шрифтом.
Мы назначим его набору атрибутов по умолчанию и добавим ограничение, что любая «нижняя» одежда, например,
слаксы, не может быть материалом «Мех».
Чтобы добавить новый атрибут, нам нужно будет предпринять следующие шаги:

Создайте новый модуль.
Добавьте сценарий InstallData.
Добавьте исходную модель.
Добавьте бэкэнд-модель.
Добавьте модель внешнего интерфейса.
Выполните сценарий InstallData и убедитесь, что он работает.