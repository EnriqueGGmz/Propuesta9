# Propuesta9
Carrusel de productos desarrollado en SAP UI5 

* Se creó un nuevo proyecto a partir de una plantilla basado SAP Fiori application
 ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/01c62cc1-e0ef-4528-b815-fe647d0e839b)

* Ya un obtenida la estructura de nuestro proyecto basado en la plantilla de SAP Fiori se debe modificar el archivo manifest.json en la etiqueta para el dataSource para el consumo del api service quedando de la siguiente manera.

   ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/ac578088-a84f-42ec-a747-abaf6c3ef639)

* Luego se modifica el item de la vista para mapear la data traida por el api service y se agrega la sintaxis para mostrar el carrusel con la data, quedando nuestra vista de la siguiente manera.

  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/70bb8fe9-91b6-4f36-aeed-cd3fd5a5e558)
  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/d9de5980-63de-47d7-9b6d-568bc6c656e1)
  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/84c9f012-a619-4726-83cc-49fe102fbd87)
  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/2150c106-f96b-4cac-a297-be9ab2a45827)

* Se modifica el controlador de la vista donde vamos a aplicar toda la logica para nuestros botones mostrados en la vista tanto el de mas detalles como la consulta de disponibilidad del producto.

  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/a1e40172-b7d3-450d-bb7c-4f47f6895720)
  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/c438a3a1-df8f-40c9-902c-4d52164e09c6)
  ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/d8b9884d-c0f6-4dff-84c7-2cb3830a8093)

* Se debe crear la vista para el detalle del producto de la primera vista junto con su controlador quedando de la siguiente manera nuestra estructura principal.

* Vista : 

    ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/a460f7d3-f1d6-4a58-bcb8-f66492777f8c)
    ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/821906eb-6ce8-4333-9f6d-aac6d7f853ec)
    ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/fef608d2-157a-4a49-8d0c-d95e87a3e3f3)
    ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/be5f24ce-83b1-4f99-85af-5d775dfbaf9b)

  * Controlador :
    ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/ffa898e8-55fc-44f8-80e1-5fed87873f49)

* Se debe modificar el archivo manifest para las rutas configuradas del proyecto esto nos va a ayudar para la navegacion entre pantallas.

    * Se crea el nombre de la vista con su respectivo targetView que es el que nos va a indicar a donde se dirige el target de la vista.
    ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/8425a5ab-2776-45c9-a5f6-0f876cf41c2c)

  *  Se crean los targets de la ruta.
     ![image](https://github.com/EnriqueGGmz/Propuesta9/assets/93535655/d5faa75e-d1bd-4ae1-a6d4-86ba0922c6b5)








  






