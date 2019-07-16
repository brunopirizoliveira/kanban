
const tecnicos = [
   "Administrador",
   "Adriano Dutra Wichmann",
   "Adriano Franco",
   "Andréia Regina da Rosa",
   "Bruno Fernandes Ukoski",
   "Claudio Cardozo",
   "Eduardo Franck Garcia",
   "Jonathan Padilha Dellagustin",
   "Marco Aurélio Pintos Borges",
   "Tatiane Moraes dos Santos",
   "William da Fonseca Guimaraes"
];



tecnicos.forEach(function(value, index) {

   document.querySelector("#area_users").innerHTML += `
      <div id="user_${index}">
         <div class="list-group-item  header-bl grabbable ">
            ${value}
         </div>
         <div id="list_user_${index}" class="list-group">
            <div class="list-group-item grabbable disparaCard"> <span class="header-chamado-user">44221</span> </div>
         </div>
      </div>`;
});

// Order Backlog Items
Sortable.create(list_backlog_1, { group: 'shared', animation: 150, sort: true });

// Order Users
Sortable.create(area_users, { 
   animation: 150, 
   sort: true , // handle's class
});

// Order Users Items
Sortable.create(list_user_1, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_2, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_3, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_4, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_5, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_6, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_7, { group: 'shared', animation: 150, sort: true });
Sortable.create(list_user_8, { group: 'shared', animation: 150, sort: true });

// Dispara Modal
 $(".disparaCard").on("click", function() {
    $('#myModal').modal('show');


   fetch('http://localhost:3000/chamados', { method: 'GET'})
   .then(response => response.json())
   .then(data => console.dir(data));

 });

