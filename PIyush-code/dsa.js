let n = 6

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
       if(i==1 || j==1 || i==4 && j<=n || j===n && i<=4){
        process.stdout.write(" * ")
       }
       else{
        process.stdout.write("   ")
       }
    }

    process.stdout.write('  ')

    for(let j=1;j<=n;j++){
        if(j==Math.ceil(n/2) || i==1 || i == n){
            process.stdout.write(" * ")
        }
        else{
            process.stdout.write("   ")
        }
    }

    process.stdout.write('  ')

    for(let j=1;j<=n;j++){
        if(j==1 && i<=4 || i == 4 || j== n || i == n){
            process.stdout.write(" * ")
        }
        else{
            process.stdout.write('   ')
        }
    }

    process.stdout.write("  ")

    for(let j=1;j<=n;j++){
        if(j==1 || i==n || j==n){
            process.stdout.write(" * ")

        }
        else process.stdout.write("   ")
    }

    process.stdout.write("  ")

    for(let j=1;j<=n;j++){
        if(i===1 || j==1 && i<=3 || i==3 || j==n && i>=5 || i==n){
            process.stdout.write(" * ")
        }
        else process.stdout.write('   ')
    }

    process.stdout.write("  ")

    for(let j=1;j<=n;j++){
        if(j==1 || i == Math.ceil(n/2) || j==n){
            process.stdout.write(" * ")
        }
        else{
            process.stdout.write("   ")
        }
    }

    process.stdout.write("\n")
}