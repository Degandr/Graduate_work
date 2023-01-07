import superagent from "superagent";
import { URLs } from "./urls_and_types";
import { SendingTypes } from "./urls_and_types";
import { statusCode } from "./expected_results";
import { Contains } from "./expected_results";

describe("API_1 GET", () => {
  it("Positive: Check Status", async () => {
    const res = await superagent.get(URLs.api_1);
    expect(res.status).toBe(statusCode.OK);
  });
});

describe("API_2 HEAD", () => {
  it("Positive: Check Body", async () => {
    const res = await superagent.head(URLs.api_2);
    expect(res.body).toEqual(Contains.bodyEmptyObj);
  });
});

describe("API_3 GET_DEEP_DATA", () => {
  it("Positive: Check Data in Email Field", async () => {
    const res = await superagent.get(URLs.api_3);
    expect(res.body.email).toBe(Contains.bodyCertainEmail);
  });
});

describe("API_4 GET_ERROR", () => {
  it("Error", async () => {
    try {
      await superagent.get(URLs.api_4);
    } catch (error: any) {
      expect(error.status).toBe(statusCode.NotFound);
      expect(error.body).toEqual(Contains.errorUndefined);
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
      .post(URLs.api_5)
      .set(SendingTypes.ContentType, SendingTypes.applicationJson)
      .send({ title: sendingObj["title"], body: sendingObj["body"], userId: sendingObj["userId"] });
    expect(res.status).toBe(statusCode.Created);
    expect(res.body.title).toEqual(sendingObj.title);
    expect(res.body.body).toEqual(sendingObj.body);
    expect(res.body.userId).toEqual(sendingObj.userId);
    expect(Number(res.body.id)).toBeLessThan(Contains.bodyNewId);
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
      await superagent.post(URLs.api_6).set(SendingTypes.ContentType, SendingTypes.applicationJson).send({
        title: sendingObj["title"],
        body: sendingObj["body"],
        userId: sendingObj["userId"],
      });
    } catch (error: any) {
      expect(error.status).toBe(statusCode.NotFound);
      expect(error.body).toEqual(Contains.errorUndefined);
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
    const res = await superagent.put(URLs.api_7).set(SendingTypes.ContentType, SendingTypes.applicationJson).send({
      id: sendingObj["id"],
      title: sendingObj["title"],
      body: sendingObj["body"],
      userId: sendingObj["userId"],
    });
    expect(res.status).toBe(statusCode.OK);
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
      await superagent.put(URLs.api_8).set(SendingTypes.ContentType, SendingTypes.applicationJson).send({
        id: sendingObj["id"],
        title: sendingObj["title"],
        body: sendingObj["body"],
        userId: sendingObj["userId"],
      });
    } catch (error: any) {
      expect(error.status).toBe(statusCode.InternalServerError);
      expect(error.statusMessage).toEqual(Contains.errorUndefined);
      expect(error.text).toEqual(Contains.errorUndefined);
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
    const res = await superagent.patch(URLs.api_9).set(SendingTypes.ContentType, SendingTypes.applicationJson).send({
      id: sendingObj["id"],
      title: sendingObj["title"],
      body: sendingObj["body"],
      userId: sendingObj["userId"],
    });
    expect(res.status).toBe(statusCode.OK);
    expect(res.body.id).toEqual(sendingObj.id);
    expect(res.body.title).toEqual(sendingObj.title);
    expect(res.body.body).toEqual(sendingObj.body);
    expect(res.body.userId).toEqual(sendingObj.userId);
  });
});

describe("API_10 DELETE", () => {
  it("Positive: Record Deleting", async () => {
    const res = await superagent.delete(URLs.api_10);
    expect(res.statusCode).toBe(statusCode.OK);
    expect(res.body).toEqual(Contains.bodyEmptyObj);
  });
});
