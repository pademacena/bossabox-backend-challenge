import { Schema, model, Document } from 'mongoose';

interface ToolsInterface extends Document {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const ToolsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
});

export default model<ToolsInterface>('Tools', ToolsSchema);