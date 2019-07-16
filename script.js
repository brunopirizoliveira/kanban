

// Order Backlog Items
Sortable.create(list_backlog_1, { group: 'shared', animation: 150, sort: true });

// Order Users
Sortable.create(users, { 
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

//  $("div[id^='card_backlog_']").on("click", function() {
//     $('#myModal').modal('show');
//  });

// Dispara Modal
 $(".disparaCard").on("click", function() {
    $('#myModal').modal('show');
 });