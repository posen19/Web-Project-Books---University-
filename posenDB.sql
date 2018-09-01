﻿# Host: 192.168.3.3  (Version 5.6.24)
# Date: 2017-08-04 15:19:09
# Generator: MySQL-Front 6.0  (Build 1.172)


#
# Structure for table "libros"
#

DROP TABLE IF EXISTS `libros`;
CREATE TABLE `libros` (
  `idLibro` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL DEFAULT '' COMMENT 'titulo de libro',
  `autor` varchar(255) NOT NULL DEFAULT '',
  `imagen` varchar(255) NOT NULL DEFAULT '' COMMENT 'ruta de enlace a la imagen',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT 'url de acceso a la página del libro',
  `descripcion` text COMMENT 'texto explicativo',
  PRIMARY KEY (`idLibro`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

#
# Data for table "libros"
#

INSERT INTO `libros` VALUES (1,'EL NOMBRE DEL VIENTO','Patrick Rothfuss','PortadaElNombreDelViento.jpg','Libro-ElNombreDelViento.html','En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la autentica historia de su vida. Una historia que unicamente el conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe musico, mendigo, ladron, estudiante, mago, heroe y asesino. Ahora va a revelar la verdad sobre sí mismo. Y para ello debe empezar por el principio: su infancia en una troupe de artistas itinerantes, los anyos malviviendo como un ladronzuelo en las calles de una gran ciudad y su llegada a una universidad donde esperaba encontrar todas las respuestas que habia estado buscando. Viaje, ame, perdi, confie y me traicionaron. He robado princesas a reyes agonicos. Incendie la ciudad de Trebon. He pasado la noche con Felurian y he despertado vivo y cuerdo. Me expulsaron de la Universidad a una edad a la que a la mayoria todavia no los dejan entrar. He recorrido de noche caminos de los que otros no se atreven a hablar ni siquiera de dia. He hablado con dioses, he amado a mujeres y he escrito canciones que hacen llorar a los bardos. Me llamo Kvothe. Quiza hayas oido hablar de mi.'),(2,'EL IMPERIO FINAL','Brandon Sanderson','PortadaElImperioFinal.jpg','Libro-ElImperioFinal.html','Durante mil anyos han caido las cenizas y nada florece. Durante mil anyos los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil anyos el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes e inmortalidad. Le ayudan obligadores e inquisidores, junto a la poderosa magia de la alomancia. Pero los nobles, con frecuencia, han tenido trato sexual con jovenes skaa y, aunque la ley lo prohibe, algunos de sus bastardos han sobrevivido y heredado los poderes alomanticos: son los nacidos de la bruma (mistborns). Ahora, Kelsier, el superviviente, el unico que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos unidos a la rebelion que los skaa intentan desde hace mil anyos puedan cambiar el mundo y la atroz dominación del Lord Legislador.'),(3,'EL TEMOR DE UN HOMBRE SABIO','Patrick Rothfuss','PortadaElTemorDeUnHombreSabio.jpg','Libro-ElTemoDeUnHombreSabio.html','Musico, mendigo, ladron, estudiante, mago, heroe y asesino. Kvothe es un personaje legendario, el heroe o el villano de miles de historias que circulan entre la gente. Todos le dan por muerto, cuando en realidad se ha ocultado con un nombre falso en una aldea perdida. Allí simplemente es el taciturno duenyo de Roca de Guia, una posada en el camino. Hasta que hace un dia un viajero llamado Cronista le reconocio y le suplico que le revelase su historia, la autentica, la que deshacia leyendas y rompia mitos, la que mostraba una verdad que solo Kvothe conocia.'),(4,'EL COLOR DE LA MAGIA','Terry Pratchett','PortadaElColorDeLaMagia.jpg','','La historia comienza en la ciudadestado de AnkhMorpork a la que llega Dosflores, el primer turista de todo el Mundodisco. Rincewind, un mago renegado e inepto recibe la mision de servirle de guia en un viaje que los llevara por gran parte del Mundodisco. A lo largo del libro asistimos, entre continuas referencias a obras clave del genero epico y de fantasia, al contraste entre la cobardia y suspicacia de Rincewind y a la inocencia absoluta de Dosflores, quien, lejos de pasarlo mal, vive cada aventura con ilogico fervor e ilusion.'),(5,'EL POZO DE LA ASCENSIÓN','Brandon Sanderson','PortadaElPozoDeLaAscensión.jpg','','Durante los ultimos mil anyos, han caido las cenizas y nada florece. Durante mil anyos, los skaa han sido esclavizados y han vivido sumidos en un miedo inevitable. Durante mil anyos, el Lord Legislador ha reinado con un poder absoluto gracias al terror y a su divina invencibilidad por la poderosa magia de la alomancia. Pero vencer y matar al Lord Legislador fue la parte sencilla. El verdadero desafío lo constituira sobrevivir a las consecuencias de su caida. Tomar el poder tal vez resulto facil, pero ¿que ocurre despues?, ¿como se usa el poder? Una amena reflexion sobre estrategia politica y religiosa en el marco de una aventura epica con luchas estilo kung fu gracias a los siempre misteriosos poderes de la alomancia.'),(6,'MORT','Terry Pratchett','PortadaMort.jpg','','La accion arranca cuando La Muerte contrata a Mort, un muchacho escualido y patoso como aprendiz. Tras un corto periodo de aprendizaje, Mort queda al cargo y la Muerte se toma un pequenyo descanso. Pero mientras La Muerte se dedica a visitar los bares del Mundodisco y se enfrasca en extranyos dilemas filosoficos, su aprendiz ocasiona una paradoja temporal al perdonarle la vida a la princesa Keli, sin darse cuenta de que quien hace el trabajo de la Muerte poco a poco se vuelve la Muerte.'),(7,'EL HEROE DE LAS ERAS','Brandon Sanderson','PortadaElHeroeDeLasEras.jpg','','Durante mil anyos los skaa han vivido esclavizados y sumidos en el miedo al Lord Legislador, que ha reinado con un poder absoluto gracias al terror y a la poderosa magia de la alomancia. Kelsier, el Superviviente, el unico que ha logrado huir de los Pozos de Hathsin, encuentra a Vin, una pobre chica skaa con mucha suerte. Los dos se unen a la rebelion que los skaa intentan desde hace un milenio y vencen al Lord Legislador. Pero acabar con el Lord Legislador es la parte sencilla.');

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(20) NOT NULL DEFAULT '' COMMENT 'Nom del usuari',
  `Cognom` varchar(30) NOT NULL DEFAULT '' COMMENT 'Cognom del usuari',
  `Email` varchar(50) NOT NULL DEFAULT '' COMMENT 'Correo elecetronico del usuario',
  `Tel` varchar(10) NOT NULL DEFAULT '' COMMENT 'telefono del usuario',
  `pass` varchar(255) NOT NULL DEFAULT '' COMMENT 'contraseña del usuario',
  `FechaNacimiento` varchar(255) NOT NULL DEFAULT '' COMMENT 'Fecha de nacimiento',
  `Direccion` varchar(255) NOT NULL DEFAULT '' COMMENT 'direccion fisica del usuario',
  `Poblacion` varchar(255) NOT NULL DEFAULT '' COMMENT 'Poblacion del usuario',
  `Pais` varchar(255) NOT NULL DEFAULT '' COMMENT 'Pais del usuario',
  `CodigoPostal` varchar(5) NOT NULL DEFAULT '' COMMENT 'CodigoPostal del usuario',
  `Iban` varchar(255) NOT NULL DEFAULT '' COMMENT 'Iban del usuario',
  `permiso` int(11) NOT NULL DEFAULT '0',
  `img` varchar(255) NOT NULL DEFAULT 'Img/Noticia3.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mailunique` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=369 DEFAULT CHARSET=latin1;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (6,'Posen','Dias','usa@uda.ad','+376-77777','Paulo123','05/17/2017','asdasdasd','asdasdasda','asdadasd','AD700','AD7700014747474747474748',0,'Img/imagen-cachorro-comprimir.jpg'),(17,'Xavi','Garcia','xgarcia@uda.ad','+376-32145','Paulo123','05/05/2011','Sisisi','Sisisi o nonono','Sino pero Sino','AD100','AD0100032121254545887879',0,'Img/Noticia3.jpg'),(18,'Joonathan','Vela','vela@jonatha.uda.ad','+376-77777','SiSi1234','05/17/2017','asdasdasd','asdasdasda','asdadasd','AD700','AD7700014747474747474748',0,'Img/Noticia3.jpg'),(19,'Paco','Jones','Paco@jones.ad','+376-69696','123456aA','09/14/1937','Tu tries num 69','Noves de segre','Espanya','27500','AD7700010709937490740970',0,'Img/Noticia3.jpg'),(31,'Posen','Assdsd','d@a.ad','+376-77777','Asdfg123','05/09/2017','ASdasd','asdasda','asdasd','AD400','AD7700011515145454488484',0,'Img/Noticia3.jpg'),(32,'NoPosen','Assdsd','dad@aaa.ad','+376-77777','Asdfg123','05/09/2017','ASdasd','asdasda','asdasd','AD400','AD7700011515145454488484',0,'Img/Noticia3.jpg'),(33,'NoPosen','Assdsd','dadaa@aaa.ad','+376-77777','ASDFg123','05/09/2017','ASdasd','asdasda','asdasd','AD400','AD7700011515145454488484',0,'Img/Noticia3.jpg'),(34,'NoPosen','Assdsda','daadaa@aaaaasa.ad','+376-77777','Asdfg123','05/09/2017','ASdasd','asdasda','asdasd','AD400','AD7700011515145454488484',0,'Img/Noticia3.jpg'),(35,'Willemz','Do Carmo','willemz@william.wi','+376-77777','Asdfg014','05/04/1999','Willl','Willlllaa','Wilooo','AD400','AD7700030000000000000000',0,'Img/Noticia3.jpg'),(36,'','Willo','willo123@willo.ad','+376-80000','Willo123','05/02/2017','willo','willo','willo','00000','AD7700015555555555555555',0,'Img/Noticia3.jpg'),(37,'Willo','Willo','willo123@willoasda.ad','+376-80000','Asdfg123','05/02/2017','willo','willo','willo','00000','AD7700015555555555555555',0,'Img/Noticia3.jpg'),(40,'Willo','Willo','willo1a23@willoasda.ad','+376-80000','Asdfg014','05/02/2017','willo','willo','willo','00000','AD7700015555555555555555',0,'Img/Noticia3.jpg'),(42,'Willo','Willo','wiasdllo1a23@willoasada.ad','+376-80000','Asdf0147','05/02/2017','willo','willo','willo','00000','AD7700015555555555555555',0,'Img/Noticia3.jpg'),(45,'Alex','Fonte','afonte@uda.ad','+376-77777','Alex1234','05/01/2017','Alexales','AlexAlex','Alex','AD500','AD7100014848484488444848',0,'Img/Noticia3.jpg'),(47,'Gillberto','Colina','gcolina@udas.ad','+376-77777','Gilberto123','05/03/2017','Av. samda','Asd','Asd','AD400','AD0000031414141414141441',0,'Img/Noticia3.jpg'),(48,'Sergi','Raino','sraino@uda.ad','+376-87878','Gilberto123','05/10/2017','Asdfg','Asdfg','Asdfg','AD700','AD7700014646121412141241',0,'Img/Noticia3.jpg'),(49,'Elvis','Teck','elvis@teck.com','+376-88888','ElvisT123','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(50,'Elvis','Teck','elvis@tecka.com','+376-88888','Elvis123','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(51,'Elvis','Teck','elvias@tecka.com','+376-88888','Asdfg014','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(52,'Elvis','Teck','elvias@tecaka.com','+376-88888','Erty1234','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(53,'Elvis','Teck','elvias@teacaka.com','+376-88888','Ertyu123','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(55,'Elvis','Teck','elviaas@teacaka.com','+376-88888','Asdfg123','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(56,'Elvis','Teck','elviaass@teacaka.com','+376-88888','asdfA123','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(58,'Elvis','Teck','elviaass@teacaka.om','+376-88888','Asdfg014','05/01/2017','Elvis','TEck','Cocho','AD474','AD7700015565656565655665',0,'Img/Noticia3.jpg'),(59,'Paulo','Paulo','paulo@paulo.ad','+376-88888','Paulo123','05/03/2017','Pasdasd','Pasdasd','Pasdasd','AD701','AD7700014848488448484888',0,'Img/Noticia3.jpg'),(61,'Paulo','Paulo','pauloa@paulo.ad','+376-88888','Paulo123','05/03/2017','Pasdasd','Pasdasd','Pasdasd','AD701','AD7700014848488448484888',0,'Img/Noticia3.jpg'),(62,'Gilito','Colina','hola@andorra.ad','+376-69541','Hola1234','05/02/2017','refre','refre','refre','AD500','AD3300015464564654564564',0,'Img/Noticia3.jpg'),(63,'Chema','Loco','Chema@uda.ad','+376-65423','Soychema12','05/14/2017','zxzas','zxza','asas','AD500','AD6600012213212563655654',0,'Img/Noticia3.jpg'),(64,'Paulo','Dias','diaspaulo19@gmail.com','asddd','','06/01/2017','asd','asd','asd','asd','asd',1,'https://lh3.googleusercontent.com/--TRc3kpx6Xw/AAAAAAAAAAI/AAAAAAAAAIA/tNHvvPfEfnA/s96-c/photo.jpg'),(134,'Posen','Hola','hola@hola.hol','+376-75454','Hola1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/6085.jpg'),(137,'Holahola','Hola','hola@holaa.hol','+376-75454','Hola1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/Noticia3.jpg'),(138,'Holahola','Hola','holaa@holaa.hol','+376-75454','Hola1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/Noticia3.jpg'),(139,'Holahola','Hola','holaa@hoolaa.hol','+376-75454','holA1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/Noticia3.jpg'),(140,'Paulo','Dias','paulo_d@dsa.dd','asd','asd','asd','kmskasw','asdfg','asdf','AD403','AD7',0,'Img/Noticia3.jpg'),(141,'Holahola','Hola','holaaaaa@hoolaa.hol','+376-75454','Hola1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/Noticia3.jpg'),(142,'Holahola','Hola','holaaaa@hoolaa.hol','+376-75454','Hola1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/Noticia3.jpg'),(143,'Holahola','Hola','holaaa@hoolaa.hol','+376-75454','Hola1234','05/10/2017','Holaholahola','hola','hol','AD700','AD7700031515145454878787',0,'Img/Noticia3.jpg'),(271,'Paco','Jones','pacojones@jones.aa','+376-33333','Hola1234','05/22/1969','uibfubrf ','Fdasffe','Fasd','23000','AD7700017893477894784774',0,'Img/Noticia3.jpg'),(324,'Alaaa','Ala','ala@ala.ala','+376-77777','Ala123Ala','06/01/2017','Alaaa','Ala','Ala','AD700','AD7700011415115151541551',0,'Img/imagen-cachorro-comprimir.jpg'),(329,'Abab','Aobab','aba@aba.ab','+376-77777','Abaa1234','06/01/2017','Aba12','Aba','Aba','AD400','AD4700031151151111511111',0,'Img/Noticia3.jpg'),(334,'Again','Again','again@aga.ag','+376-77777','Again123','06/01/2017','Again','Again','Again','AD700','AD7700013321315611616516',1,'Img/Noticia3.jpg'),(340,'Gilberto','Colina Valladares','gilbertocv01@gmail.com','','','','','','','','',0,'https://lh6.googleusercontent.com/-TEoV3mJXMW4/AAAAAAAAAAI/AAAAAAAAC-c/AqkzIH88JyU/s96-c/photo.jpg'),(343,'vela961','.','jonimenja@hotmail.com','','','','','','','','',1,'https://lh3.googleusercontent.com/-IZgoaAZ0188/AAAAAAAAAAI/AAAAAAAAAD0/WZVGAh3dpJc/s96-c/photo.jpg');

#
# Structure for table "votaciones"
#

DROP TABLE IF EXISTS `votaciones`;
CREATE TABLE `votaciones` (
  `idUser` int(11) NOT NULL DEFAULT '0',
  `idLibro` int(11) NOT NULL DEFAULT '0',
  `votacion` int(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idUser`,`idLibro`),
  KEY `idU` (`idUser`),
  KEY `idL` (`idLibro`),
  CONSTRAINT `votaciones_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  CONSTRAINT `votaciones_ibfk_2` FOREIGN KEY (`idLibro`) REFERENCES `libros` (`idLibro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "votaciones"
#

INSERT INTO `votaciones` VALUES (6,1,6),(6,2,3),(6,3,10),(62,3,8),(64,1,9),(64,2,9),(64,3,5),(134,2,3),(134,3,8),(329,1,6),(329,2,9),(329,3,10),(334,1,10),(340,1,10),(340,2,2),(340,3,10),(343,1,6),(343,2,7);
