SELECT
id,
nome,
data_nascimento,
email,
ROW_NUMBER() OVER (
    ORDER BY data_nascimento DESC
 ) AS numero
FROM usuarios;