

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function FormQuill({ value, onChange }) {
  return <ReactQuill className='w-[650px] h-[200px]' theme="snow" value={value} onChange={onChange} />;
}