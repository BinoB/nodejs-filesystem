You can test the code using Postman by following these steps:

    To test the /create-file

1.Open Postman and create a new request.
2.Select "POST" from the dropdown menu next to the URL input box.
3.Enter http://localhost:5000/create-file in the input box.
4.Click on the "Body" tab and select "raw".
5.Enter some text in the request body.
6.Click on the "Send" button.
7.The response should show "File created" if the request was successful.


    To test the /get-files

1.Open Postman and create a new request.
2.Select "GET" from the dropdown menu next to the URL input box.
3.Enter http://localhost:5000/get-files in the input box.
4.Click on the "Send" button.
5.The response should show an array of text file names if the request was successful.