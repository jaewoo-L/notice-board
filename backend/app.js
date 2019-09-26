var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var moviesRouter = require('./routes/movies'); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('dotenv').config();

var app = express();
//vue를 통한 앱이 적절한 서버 설정이 없는 단일 페이지이기 때문에 사용자가 직접 url에 상세주소를 입력하면 오류가 뜬다. 
//이때 이를 해결하기 위한 패키지가 아래와 같다.
app.use(require('connect-history-api-fallback')());

mongoose.connect(process.env.DB_HOST, {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(()=> {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('Error:', err.message);
});

const PostSchema = new mongoose.Schema({
	title: String,
	description: String
});
const Post = mongoose.model("Post", PostSchema);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/movies', moviesRouter);
app.use('/users', usersRouter);
app.get('/exercise', async (req, res) => {
	let post = await Post.create({title:'Test', description:'This is a Test'})
	res.json(post);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
