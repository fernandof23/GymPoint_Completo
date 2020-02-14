import * as Yup from 'yup';
import Orders from '../schemas/HelpOrders';
import Students from '../models/Student';
import OrderMail from '../jobs/OrderMail';
import Queue from '../../lib/queue';

export default {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
    const { _id } = req.params;
    const answer = await Orders.findById(_id);
    answer.answer = req.body.answer;
    answer.answer_at = new Date();

    const student = answer.student_id;

    await answer.save();
    const existStudent = await Students.findByPk(student);

    await Queue.add(OrderMail.key, {
      existStudent,
      answer,
    });

    return res.json(answer);
  },

  async index(req, res) {
    const answerData = await Orders.find({ answer: null });
    const students = await Students.findAll({});

    const newArray = answerData.map(answer => ({
      ...answer,
      student: students.filter(item => item.id === Number(answer.student_id)),
    }));

    return res.json(newArray);
  },
};
