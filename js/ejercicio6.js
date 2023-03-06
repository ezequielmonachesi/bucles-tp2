/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/

for(let j = 1; j <= 30; j++){
    for(let i = 0; i < j; i++){
        document.write(String.prototype.repeat = j);
    }  
    document.write('<br>')
}
