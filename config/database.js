if(process.env.NODE_ENV === 'production')
{
  module.exports  = {mongoURI :'mongodb://jayesh:jayesh1044@ds253324.mlab.com:53324/mtest-prod'}
}
else {
  module.exports = {mongoURI :'mongodb://localhost/mtest'}
}
