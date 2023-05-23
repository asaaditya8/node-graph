import { useCallback } from 'react';
import { Card, Space, Tooltip } from 'antd';
import { MessageOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Handle, Position } from 'reactflow';
import WhatsappFilled from './WhatsappFilled';

const handleStyle = { top: 10 };

const { Meta } = Card;

const MessageNode: React.FC<any> = ({ isConnectable }) => {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, []);

    const text = 'text message 1 heelo this is supposed to be a very simple message but long';

    return (
        <div className="message-node">
            <Handle type="target" position={Position.Left} isConnectable={isConnectable} />

            <div className='header'>
                <Space>
                    <MessageOutlined rev={undefined} />
                    <div>Send Message</div>
                </Space>
                <WhatsappFilled />
            </div>
            <Tooltip placement='top' title={text}>
                <div className='content'>
                    {text}
                </div>
            </Tooltip>

            <Handle type="source" position={Position.Right} id="a" isConnectable={isConnectable} />
        </div>
    );
    // <Handle type="source" position={Position.Right} id="a" style={handleStyle} isConnectable={isConnectable} /> 
}

export default MessageNode;
