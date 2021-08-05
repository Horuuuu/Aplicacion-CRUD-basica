App de registro y listado de nombres hecha con  React Js
![]()
Instale en las dependencias Bootstrap(lo importe en el index.js para tenerlo disponible en todo el proyecto) y uniqid para generar id unicas para los nombres ,ya que para agragar un nombre nuevo lo puse en un objeto, cada objeto con su id unico y nombre.Asi a pesar de haber dos nombres iguales,React los reconocera como diferentes.
Agregue un componente para el formulario y este esta divido en dos ,una parte para registrar el nombre y otra para listarlo.Ambos los hice con Bootstrap.
Use el hook useState para manejar el estado de los nombres en el formulario y tambien para la lista de nombres.Utilize el evento onChange para vincular los nombres  del formulario y el evento onSubmit para capturar los nombres.
Para mostar los nombres en la lista  use el metodo map para recorrer el arreglo con los nombres ,le puse el id  a la key y una funcion con un li con el nombre. 
