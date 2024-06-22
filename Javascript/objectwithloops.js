<
             var emp=[]

            emp[0]=1;
            emp[1]="Rama";
            emp[2]="rama@gmail.com";
            emp[3]="Hyderabad";
            emp[4]= 9533818684;

            document.write(`Emp data is: ${emp} <br><br>`);
           
            ////array---->
            
            document.write(`****************************FOR LOOP <br>`);
            for(i=0; i<emp.length; i++){
                document.write(`${i} - ${emp[i]}<br>`);
            }
            
            document.write(`*****************************FOR LOOP <br>`)
            for(i=0; i<3; i++){
                document.write(`${i} - ${emp[i]}<br>`)
            }

            document.write(`******************************FOR LOOP <br> `);

            for(var i in emp){
                document.write(`${i} - ${emp[i]}<br>`)
            }

      