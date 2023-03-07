$(function () {
    // questionTableInit();
    searchInteraction();
});

// function questionTableInit() {
//     // var questionCreatedData = JSON.parse(localStorage.getItem('questionData'));

//     // const userName = localStorage.getItem('userName');
//     // if (questionCreatedData) {
//     //     document.getElementById('questionMappingInTable').innerHTML = questionCreatedData.map((question, index) =>
//     //         `<tr class="rm-table-tr-view-question">
//     //             <td>${index + 1}</td>
//     //             <td class="searchDataTD rm-wrap-text" data-question="${question.myTitle}">${question.myTitle}</td>
//     //             <td class="searchDataTD rm-wrap-text" data-question="${question.myAnswer}">${question.myAnswer}</td>
//     //             <td>${userName}</td>
//     //         </tr>`
//     //     ).join('');
//     // }

// }

function searchInteraction() {

    const userName = localStorage.getItem('userName');
    $('.userNameCreatedLogin').text(userName);

    if (userName == 'Users') {
        $('.controls-view-table-question').hide();
    }

    // var $rows = $('#QuestionListTable tbody > tr');
    // $('#questionSearchInputInteraction').keyup(function () {
    //     var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    //     $rows.show().filter(function () {
    //         var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    //         return !~text.indexOf(val);
    //     }).hide();
    // });
    const datatable = $('#createdQuestionTable').DataTable({
        "pageLength": 5,
        responsive: true,
        "columnDefs": [
            { "width": "10%", "targets": 0 }
        ],
        lengthMenu: [
            [5, 10, 15, -1],
            [5, 10, 15, 'All'],
        ],
        dom: "<'row data-table-padding-gold-star pt-2'<'col-sm-6'l><'col-sm-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row data-table-padding-gold-star pb-1'<'col-sm-5 d-flex align-items-center'i><'col-sm-7'p>>",
    });

    $('#questionSearchInputInteraction').keyup(function () {
        datatable.search($(this).val()).draw();
    })
}