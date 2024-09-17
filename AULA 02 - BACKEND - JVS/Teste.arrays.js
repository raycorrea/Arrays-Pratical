const estudantes = ['Bia', 'livia', 'carol', 'Andrielle', 'Alessandra', 'Renata', 'Bruna', 'Rayan', 'Sheila', 'Vida', 'Emili', 'Ster'];

// Acessando o primeiro, último e penúltimo elementos
const primeirosEUltimos = [estudantes[0], estudantes[estudantes.length - 1], estudantes[estudantes.length - 2]];
const sala2 = estudantes.slice(0, estudantes.length/2);

estudantes.splice(1, 3, 'Rodrigo');

console.log(primeirosEUltimos);
console.log(sala2);
console.log(estudantes);