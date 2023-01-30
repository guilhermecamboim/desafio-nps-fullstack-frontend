import { api } from './api';

class QuestionController {
  async getAllQuestions() {
    const getAllQuestions = await api.get('questions');
    return getAllQuestions.data;
  }
}

export default new QuestionController();
