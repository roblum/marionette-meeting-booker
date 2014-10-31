describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      	expect([1,2,3].indexOf(5)).to.be(-1);
     	expect([1,2,3].indexOf(0)).to.be(-1);
    });
});

describe('test2', function(){
  	    it('formData test', function(){
			var formData = {};
			formData.title = 'test title';

			var meeting = new MeetingBooker.Entities.Meeting(formData);      		

			expect(meeting.get('title')).to.be('test title');
    	});
 	})
});
