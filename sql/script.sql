CREATE TABLE  estatuto (
  id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idusuario int(100),
  concorda char(1),
  opiniao varchar(200),
  dia datetime
);

CREATE TABLE  evento (
  id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tipo varchar(100),
  nome varchar(200),
  descricao varchar(500),
  dia datetime,
  valor varchar(10),
  ativo char(1)
);

CREATE TABLE  participanteseventos (
  idEvento int(100),
  idUsuario int(100),
  participara char(1),
  pagou char(1)
);

create table comunicados(
  id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(200),
  conteudo varchar(1000),
  importante char(1),
  dataPublicacao datetime,
  usuarioResponsavel varchar(200),
  ativo char(1),
  qtdCurtidas int(100),
  qtdComentarios int(100)
);

create table comentariosComunicado(
  id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idComunicado int(100),
  usuario varchar(200),
  comentario varchar(1000),
  dataComentario datetime
);

create table curtidasComunicado(  
  idComunicado int(100),
  usuario varchar(200)
);