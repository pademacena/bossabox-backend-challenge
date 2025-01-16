import { ToolsService } from '../../service/tools.service';
import { MongodbConnect } from '../../database';

const mongodb = new MongodbConnect;

const firstTool = {
  title: "hotel",
  link: "https://github.com/typicode/hotel",
  description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
  tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}

let firstId: any;

const secondTool = {
  title: "fastify",
  link: "https://www.fastify.io/",
  description:  "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
  tags: ["web", "framework", "node", "http2", "https", "localhost"]
}

beforeAll(async () => {
  await mongodb.connect();
});

afterAll(async () => {
  await mongodb.disconnect();
});

describe('Tools Service', () => {
  const service = new ToolsService();

  it('Create Tools', async () => {
    const result = await service.create(firstTool);
    firstId = result?._id;
    expect(result).toHaveProperty('_id');
  });

  it('Create Second Tools', async () => {
    const result = await service.create(secondTool);
    firstId = result?._id;
    expect(result).toHaveProperty('_id');
  });

  it('Find All', async () => {
    const result = await service.list();
    expect(result.length).toEqual(2);
  });

  it('Find Tag', async () => {
    const result = await service.list('localhost');
    expect(result.length).toEqual(1);
  });

  it('Delete Tool', async () => {
    const result = await service.delete(firstId);
    expect(result).toEqual({
      acknowledged: true,
      deletedCount: 1,
     });
  });

});