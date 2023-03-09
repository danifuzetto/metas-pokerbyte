$(document).ready(function () {
    $('#example').DataTable({
        ajax: 'test.json',
        columns: [
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'extn' },
            { data: 'start_date' },
            { data: 'salary' },
        ],
    });
});