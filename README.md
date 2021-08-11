<h4>App de registro y listado de nombres hecha con  React Js</h4>

![](Screenshots/Screenshot_2.jpg)

<p>Instalé en las dependencias Bootstrap(lo importé en el index.js para tenerlo disponible en todo el proyecto) y uniqid para generar id unicas para los nombres ,ya que para agregar un nombre nuevo lo puse en un objeto, cada objeto con su id unico y nombre.Asi a pesar de haber dos nombres iguales,React los reconocera como diferentes.
<p>Agregué un componente para el formulario y este esta divido en dos ,una parte para registrar el nombre y otra para listarlo.Ambos los hice con Bootstrap.</p>
Usé el hook <strong>useState</strong> para manejar el estado de los nombres en el formulario y tambien para la lista de nombres.Utilizé el evento <strong>onChange</strong> para vincular los nombres  del formulario y el evento <strong>onSubmit</strong> para capturar los nombres.</p<
<p>Para mostar los nombres en la lista  usé el metodo <strong>map</strong> para recorrer el arreglo con los nombres ,le puse el id  a la key y una funcion con un li con el nombre.</p>
<p>Para borrar los nombres registrados , usé el metodo <strong>filter</strong> en el arreglo.En un botón con el evento <strong>onClick</strong> , con una funcion que tome el id y nombres singulares y elimine ese exactamente.</p>
<p>Para editar un nombre, a travez de useState ,con estado inicial falso (porque no se puede editar algo que no existe todavía),creí una variable que cambie el estado a verdadero y en un nuevo boton con el metodo onClick y una funcion con dos parametros un  id y nombre especifíco.</p>
Para comprobar que el campo nombre no esta vacio al registrar ,use una condicion en la que el negativo ! de nombre no se pueda rellenar y lo hice con el metodo <strong>trim</strong> y luego a travez de una alerta avisar del error.

![](Screenshots/reactnode.png)

----
