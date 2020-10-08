import {describe, it} from 'mocha';
import {strictEqual} from "assert";
import path from 'path';
import {Util} from "@miqro/core";
// import * as rewiremock from 'rewiremock';

process.env.NODE_ENV = "test";

const miqroCorePath = "@miqro/core";

describe('Zexample start', function () {
  this.timeout(10000000);
  it('start the example in simple mode', (done) => {
    const test = async () => {
      const lib = require('../src/miqro');
      process.env.MIQRO_DIRNAME = path.resolve(__dirname, '..', 'example');
      const micro = new lib.Miqro({
        name: "Micro 1",
        service: path.resolve(__dirname, '..', 'example', 'service'),
        nodes: 1,
        mode: "simple"
      });
      await micro.start();
      const result = await Util.request({url: "http://localhost:8080/hello", method: "get"});
      strictEqual(result.status, 200);
      strictEqual(result.data.result, "world");
      await Util.request({url: "http://localhost:8080/hello", method: "get"});
      await Util.request({url: "http://localhost:8080/hello", method: "get"});
      await micro.stop();
      try {
        await Util.request({url: "http://localhost:8080/hello", method: "get"});
        strictEqual(true, false);
      } catch (e) {
        strictEqual(e.message, "connect ECONNREFUSED 127.0.0.1:8080");
      }

      delete process.env.MIQRO_DIRNAME;
    };
    test().then(done).catch(done);
  });

  it('start the example in unsupported mode', (done) => {
    const test = async () => {
      try {
        const lib = require('../src/miqro');
        const micro = new lib.Miqro({
          name: "Micro 1",
          service: path.resolve(__dirname, '..', 'example', 'service'),
          nodes: 1,
          mode: "unsoported" as any
        });
        strictEqual(true, false);
      } catch (e) {
        strictEqual(e.message, `mode unsoported not supported!`);
      }
    };
    test().then(done).catch(done);
  });
});
