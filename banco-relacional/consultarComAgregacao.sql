select regiao as Regiao,
sum(populacao) as Total
from estados
GROUP BY regiao
order by Total desc

select sum(populacao) 'Total' from estados

select avg(populacao) as Total from estados