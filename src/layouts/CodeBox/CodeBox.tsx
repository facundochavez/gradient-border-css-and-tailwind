import CodeTabs from '@/components/CodeTabs/CodeTabs';
import MyCodeMirror from '@/components/MyCodeMirror/MyCodeMirror';
import { useCodeContext } from '@/context/code.context';
import { Button, message } from 'antd';
import Image from 'next/image';

const CodeBox = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { codes, selectedCode } = useCodeContext();

  function copyToClipboard() {
    messageApi.open({
      type: 'success',
      content: 'Copied to clipboard!',
    });
  }

  //// COMPONENT
  return (
    <>
      {contextHolder}
      <div className='w-full bg-[var(--color-primary)] rounded-2xl flex flex-col p-5 pt-4 md:p-6 md:pt-5 gap-5'>
        <header className='w-full flex justify-between'>
          <CodeTabs />
          <Button
            onClick={copyToClipboard}
            icon={
              <Image
                src='/icons/copy-icon.svg'
                alt='Copy Icon'
                width={16}
                height={16}
              />
            }
            className='active:opacity-80'
          >
            Copy
          </Button>
        </header>
        <MyCodeMirror value={codes[selectedCode].value} extensions={codes[selectedCode].extensions} />
      </div>
    </>
  );
};

export default CodeBox;
