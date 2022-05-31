process.stdout.write('?????');
process.stdin.on('data', function(data){

    process.stdout.write(`Vocẽ digitou ${data.toString()}`);
    process.exit

})