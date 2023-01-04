import superagent from "superagent";

describe("API_1 GET", () => {
  it("Positive: Check Status", async () => {
    const res = await superagent.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    expect(res.status).toBe(200);
  });
});

describe("API_2 HEAD", () => {
  it("Positive: Check Body", async () => {
    const res = await superagent.head("https://jsonplaceholder.typicode.com/comments?postId=999999999999");
    expect(res.body).toEqual({});
  });
});

describe("API_3 GET_DEEP_DATA", () => {
  it("Positive: Check Data in Email Field", async () => {
    const res = await superagent.get("https://jsonplaceholder.typicode.com/comments/10");
    expect(res.body.email).toBe("Carmen_Keeling@caroline.name");
  });
});

describe("API_4 GET_ERROR", () => {
  it("Error", async () => {
    try {
      await superagent.get("https://jsonplaceholder.typicode.com/users/111");
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.body).toEqual(undefined);
    }
  });
});

describe("API_5 POST", () => {
  it("Positive: Creating a New Record", async () => {
    const sendingObj: { title: string; body: string; userId: number } = {
      title: "testTitle",
      body: "testBody",
      userId: 123,
    };
    const res = await superagent
      .post("https://jsonplaceholder.typicode.com/posts")
      .set("Content-Type", "application/json")
      .send({ title: sendingObj["title"], body: sendingObj["body"], userId: sendingObj["userId"] });
    expect(res.status).toBe(201);
    expect(res.body.title).toEqual(sendingObj.title);
    expect(res.body.body).toEqual(sendingObj.body);
    expect(res.body.userId).toEqual(sendingObj.userId);
    expect(Number(res.body.id)).toBeLessThan(1000);
  });
});
describe("API_6 POST", () => {
  it("Error", async () => {
    const sendingObj: { title: string; body: string; userId: number } = {
      title: "testTitle",
      body: "testBody",
      userId: 123,
    };
    try {
      await superagent
        .post("https://jsonplaceholder.typicode.com/photos/5000000?id=1")
        .set("Content-Type", "application/json")
        .send({
          title: sendingObj["title"],
          body: sendingObj["body"],
          userId: sendingObj["userId"],
        });
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.body).toEqual(undefined);
    }
  });
});

describe("API_7 PUT", () => {
  it("Positive: Record Updating", async () => {
    const sendingObj: { id: number; title: string; body: string; userId: number } = {
      id: 1,
      title: "testTitle",
      body: "testBody",
      userId: 123,
    };
    const res = await superagent
      .put("https://jsonplaceholder.typicode.com/posts/1")
      .set("Content-Type", "application/json")
      .send({
        id: sendingObj["id"],
        title: sendingObj["title"],
        body: sendingObj["body"],
        userId: sendingObj["userId"],
      });
    expect(res.status).toBe(200);
    expect(res.body.id).toEqual(sendingObj.id);
    expect(res.body.title).toEqual(sendingObj.title);
    expect(res.body.body).toEqual(sendingObj.body);
    expect(res.body.userId).toEqual(sendingObj.userId);
  });
});

describe("API_8 PUT", () => {
  it("Error", async () => {
    const sendingObj: { id: number; title: string; body: string; userId: number } = {
      id: 100000,
      title: "testTitle",
      body: "testBody",
      userId: 123,
    };
    try {
      await superagent
        .put("https://jsonplaceholder.typicode.com/posts/500000")
        .set("Content-Type", "application/json")
        .send({
          id: sendingObj["id"],
          title: sendingObj["title"],
          body: sendingObj["body"],
          userId: sendingObj["userId"],
        });
    } catch (error: any) {
      expect(error.status).toBe(500);
      expect(error.statusMessage).toEqual(undefined);
      expect(error.text).toEqual(undefined);
    }
  });
});

describe("API_9 PATCH", () => {
  it("Positive: Record Updating", async () => {
    const sendingObj: { id: number; title: string; body: string; userId: number } = {
      id: 5,
      title: "testTitle",
      body: "testBody",
      userId: 123,
    };
    const res = await superagent
      .patch("https://jsonplaceholder.typicode.com/posts/5")
      .set("Content-Type", "application/json")
      .send({
        id: sendingObj["id"],
        title: sendingObj["title"],
        body: sendingObj["body"],
        userId: sendingObj["userId"],
      });
    expect(res.status).toBe(200);
    expect(res.body.id).toEqual(sendingObj.id);
    expect(res.body.title).toEqual(sendingObj.title);
    expect(res.body.body).toEqual(sendingObj.body);
    expect(res.body.userId).toEqual(sendingObj.userId);
  });
});

describe("API_10 DELETE", () => {
  it("Positive: Record Deleting", async () => {
    const res = await superagent.delete("https://jsonplaceholder.typicode.com/posts/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({});
  });
});
