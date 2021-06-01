const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '장해리',
            'birthday' : '980714',
            'gender' : '여자',
            'job' : '사람'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '황화오항',
          'birthday' : '960903',
          'gender' : '남자',
          'job' : '사람'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));