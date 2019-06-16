import { post } from '../../utils/request';

export const options = {
  schema: {},
};

export const handler = async (request: any, reply: any) => {
  const SLACK_WEB_HOOK_URL: string = process.env.SLACK_WEB_HOOK_URL || '';
  
  await post(SLACK_WEB_HOOK_URL, {
    channel: '_bot',
    username: 'hogebot',
    text: 'hogeAPIです',
    icon_emoji: ':sunny:'
  });

  reply.send({ data: 'hoge' });
};
