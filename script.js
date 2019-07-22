
window.onload = function() {

   // Popula Kanbans
   fetch('http://wpoa000939:3000/users', { method: 'GET'})
   .then(responseUsers => responseUsers.json())
   .then(dataUsers => users = dataUsers.recordset)
   .then(() => {
      fetch('http://wpoa000939:3000/chamados', {method: 'GET'})
      .then(responseChamados => responseChamados.json())
      .then(dataChamados => chamados = dataChamados.recordset)
      .then(chamados => {
         users.forEach(function(object, index) {

            // Carrega Columns e Cards (Users)
            document.querySelector("#area_users")
            .innerHTML += `
               <div id="user_${index}" class="container-user" >
                  <div class="header-user grabbable" onclick="toggleClass(this)">
                     ${retornFirstName(object.nmusuario)} 
                     
                        <img src="./icons/man-${index}.png" class="icon-header">
                     
                  </div>
                  <div id="list_card_user_${index}" class="list-group list-card-user">                     
                     ${chamados.filter(chamado => chamado.nmusuario === object.nmusuario).map(currElement => `
                        <div data-id="${currElement.cdchamado}" class="list-group-item grabbable card-user" onclick="abreChamado(this)"> 
                           <span class="header-chamado">${currElement.cdchamado}
                              <span class="header-chamado-title"> - ${currElement.nmcliente} - ${currElement.nmseveridade} </span>  
                           </span> 
                           <span class="description-chamado">                   
                              <p> ${ currElement.dschamado.length > 90 ? `${currElement.dschamado.substring(0,89)}... ` : currElement.dschamado} </p>
                           </span> 
                        </div>`).join('')}
                  </div>
               </div>`;

         });

         // Carrega Columns e Cards (Backlog)
         document.querySelector("#area_backlog")
         .innerHTML += `				
            <div id="backlog">
               <div class="list-group-item header-backlog">
                  Backlog
               </div>      
               <div id="list_backlog" class="list-group">               
                  ${chamados.filter(chamado => chamado.nmusuario == null).map((currElement, index) => `
                  <div data-id="${currElement.cdchamado}" id="card_backlog_${index}" class="list-group-item grabbable card-backlog" onclick="abreChamado(this)">
                     <span class="header-chamado"> ${currElement.cdchamado} 
                        <span class="header-chamado-title"> - ${currElement.nmcliente} - ${currElement.nmseveridade} </span>  
                     </span> 
                     <span class="description-chamado">                   
                     <p> ${ currElement.dschamado.length > 90 ? `${currElement.dschamado.substring(0,89)}... ` : currElement.dschamado} </p>
                     </span>
                  </div>`).join('')};

               </div>
            </div>`;         
      })
      .then(() => {

         // Order Backlog Items
         Sortable.create(list_backlog, { 
            group: 'shared', 
            animation: 100, 
            sort: true, 
            chosenClass: "custom-chosen",
            // ghostClass: "custom-ghost", 
            dragClass: "custom-drag", // Custom class para esconde Drag, junto com ForceFallback, elemento não se perde            
            forceFallback: true, // Para elemento voltar para o lugar
            fallbackTolerance: 1, //Tolerancia para click
            delay: 3 //Delay para click

            , onStart: function() {
               $(document).on('mousemove', function(e){                  
                  $("#ghostCard").css({
                     display: 'block',                     
                     left: e.pageX,
                     top: e.pageY
                  });
               });
            }

            , onEnd: function() {
               $(document).on('mousemove', function(e){                  
                  $("#ghostCard").css({
                     display: 'none'
                  });
               });
            }
         });
         
         // Order Users
         Sortable.create(area_users, { 
            animation: 150, 
            sort: true,
            ghostClass: "custom-ghost",
            forceFallback: true, // Para elemento voltar para o lugar
            fallbackTolerance: 1, //Tolerancia para click
            delay: 3 //Delay para click
         });
         // Order Users Items
         document.querySelectorAll(".list-card-user").forEach(function(element) {
            let elUser = document.getElementById(element.id);
            
            Sortable.create(elUser, { 
               group: 'shared', 
               animation: 100, 
               sort: true, 
               chosenClass: "custom-chosen",
               // ghostClass: "custom-ghost", 
               dragClass: "custom-drag", // Custom class para esconde Drag, junto com ForceFallback, elemento não se perde            
               forceFallback: true, // Para elemento voltar para o lugar
               fallbackTolerance: 1, //Tolerancia para click
               delay: 3 //Delay para click

               , onStart: function() {
                  $(document).on('mousemove', function(e){                  
                     $("#ghostCard").css({
                        display: 'block',                     
                        left: e.pageX,
                        top: e.pageY
                     });
                  });
               }
   
               , onEnd: function() {
                  $(document).on('mousemove', function(e){                  
                     $("#ghostCard").css({
                        display: 'none'
                     });
                  });
               }

            });
         })
      })

   })

}

function retornFirstName(name) {
   name = name.split(' ');
   return name[0];
}

function abreChamado(target) {
   console.log(target.dataset.id);
   
   $('#myModal').modal('show');
}

function toggleClass(target) {

   let wrapper = document.getElementById(target.parentNode.id);

   // Código para sempre fechar cards expandidos
   // document.querySelectorAll('.container-user-expand').forEach(element => {      
   //    if(element.id != target.parentNode.id){
   //       document.getElementById(element.id).classList.remove('container-user-expand');
   //       document.getElementById(element.id).classList.add('container-user');
   //    }         
   // });   

   if(wrapper.classList.contains('container-user-expand')) {
      wrapper.classList.remove('container-user-expand');
      wrapper.classList.add('container-user');
   } else {
      wrapper.classList.remove('container-user');
      wrapper.classList.add('container-user-expand');
   }
}