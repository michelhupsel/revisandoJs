insert into empresas
(nome, cnpj)
values
('Bradesco', 65421816213023),
('Vale', 45621816213012),
('Cielo', 12321816213045)

alter table empresas modify cnpj varchar(14)

desc empresas
desc prefeitos
select * from empresas
select * from cidades

insert into empresas_unidades
(empresa_id, cidade_id, sede)
values
(1,1,1),
(1,2,0),
(2,1,0),
(2,2,1)