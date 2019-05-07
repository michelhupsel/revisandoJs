select * from estados

select sigla 'Sigla', nome 'Nome do Estado' from estados 
where regiao = 'Sul' 
order by id desc

select nome, regiao, populacao from estados
where populacao >= 10 
order by populacao desc