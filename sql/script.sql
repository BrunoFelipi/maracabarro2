create table evento(
  id int(100) auto_increment primary key,
  tipo varchar(100),
  nome varchar(200),
  descricao varchar(500),
  dia datetime,
  valor varchar(10),
  ativo char(1)
);

create table participantesEventos(
  idEvento int(100),
  idUsuario int(100),
  participara char(1),
  pagou char(1)
);

create table estatuto(
  id int(100) auto_increment primary key,
  idusuario int(100),
  leu char(1)
);
