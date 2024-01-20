import sinon from "sinon";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import transactionMock from "../../mocks/transaction.mock";
import TransactionModel from "src/database/models/transaction.model";
import jwt from "jsonwebtoken";
import app from "../../../src/app";
import loginMock from "tests/mocks/login.mock";
import UserModel from "src/database/models/user.model";

chai.use(chaiHttp);

describe("POST /transactions", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("quando a requisição é feita com dados válidos", function () {
    it("deve retornar um status 201 com uma transação criada", async function () {
      // arrange
      sinon
        .stub(jwt, "verify")
        .resolves({ email: loginMock.existingUser.email });
      const mockExistingUser = UserModel.build(loginMock.existingUser);
      sinon.stub(UserModel, "findOne").resolves(mockExistingUser);
      const mockTransaction = TransactionModel.build(
        transactionMock.existingTransaction
      );
      sinon.stub(TransactionModel, "create").resolves(mockTransaction);

      const httpRequestBody = transactionMock.existingTransaction;
      // act
      const httpResponse = await chai
        .request(app)
        .post("/transactions")
        .send(httpRequestBody)
        .set("Authorization", "mockToken");
      // assert
      expect(httpResponse.status).to.equal(201);
    });
  });

  describe("quando a requisição é feita com dados inválidos", function () {
    it("ao enviar um nome vazio deve retornar um status 400 com uma mensagem de erro", async function () {
      // arrange
      // act
      // assert
    });
  });
});
