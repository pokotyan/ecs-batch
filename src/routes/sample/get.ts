import { post } from '../../utils/request';

export const options = {
  schema: {},
};

export const handler = async (request: any, reply: any) => {
  const SLACK_WEB_HOOK_URL: string = process.env.SLACK_WEB_HOOK_URL || '';

  await post(SLACK_WEB_HOOK_URL, {
    channel: '_bot',
    username: 'samplebot',
    text: 'sampleAPIです',
    icon_emoji: ':hamster:'
  });

  reply.send({ data: 'sample' });
};
