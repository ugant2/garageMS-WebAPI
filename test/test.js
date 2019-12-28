

var chai = require('chai');
var  chaiHttp = require('chai-http')
var should = chai.should();

chai.use(chaiHttp);

var server = require('../index.js')


describe('User', function(){
    describe('POST user registration test', function(){
        it('it should register a single user, provided username is unique and password is entered', function(done){
            // now hit API
            chai.request(server)
            
                .post('/registration')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    "username":'ugfjfjgyz',
                    "password":'xyz',
                    "email":'xyz',
                    "phone":'xyz',
                    "location":'xyz'
                    // "image":'xyz'

                })
                .end(function(err, res){
                    //actual testing after getting response or result
                    res.should.have.status(201);
                    res.body.should.have.property('message').eql('User has been registered');
                    done();
                });
        });
    });
});