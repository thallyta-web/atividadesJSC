select codigo_cliente, nome_cliente, endereco from cliente
order by nome_cliente;

select codigo_cliente, nome_cliente, uf from cliente
order by uf desc, nome_cliente asc; --ele já vem automatico no asc(ascendende, descendente)

select codigo_cliente, nome_cliente, uf from cliente
where uf = 'SP'
--order by uf desc, nome_cliente asc;

select * from cliente
where ie <> '1820'

select * from produto where val_unit <=2;
select * from produto where val_unit >=2;

select * from produto
where val_unit >=1 and val_unit <=2
order by val_unit;

select * from produto
where unidade = 'M'; --e Kg

select * from produto
where unidade = 'M' or unidade = 'Kg';

select descricao_produto, unidade, val_unit from produto
where unidade = 'M'
and (val_unit = 0.11 or val_unit = 1.8 or val_unit = 2)