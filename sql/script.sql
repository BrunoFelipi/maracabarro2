CREATE TABLE  estatuto (
  id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idusuario int(100),
  leu char(1),
  resposta varchar(45),
  opiniao varchar(200)
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
