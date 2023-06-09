import { IFormData } from '../@types/IAnswer';
import { api } from './api';

class QuestionController {
  async getAllQuestions() {
    const getAllQuestions = await api.get('questions');
    return getAllQuestions.data;
  }

  async answerTheForm(answerDTO: IFormData[]) {
    const answerTheForm = await api.post('answers', {
      answersOfQuestions: answerDTO,
    });
    return answerTheForm;
  }
}

export default new QuestionController();
