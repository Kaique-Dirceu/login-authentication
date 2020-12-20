import User from '../models/User';

class TestController {  
  async test(req, res) {
    const user = await User.findById(req.userId);

    return res.json({
      name: user.name,
      email: user.email,
      avatar: user.avatar
    });
  }
}

export default new TestController();