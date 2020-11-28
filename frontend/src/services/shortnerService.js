import baseAPI from "./api";

class ShortnerService {
  constructor() {
    this.api = baseAPI("http://localhost:3001/");
  }

  async getLink(code) {
    const result = await this.api.get(`links/${code}`);

    return result.data;
  }

  async getStats(code) {
    const result = await this.api.get(`links/${code}/stats`);

    return result.data;
  }

  async generate(model) {
    const result = await this.api.post("links", model);
  }
}

export default ShortnerService;
