describe('Beach forecast functional tests', () => {
  it('should return a forecast with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/template');
    expect(status).toBe(200);
    expect(body).toEqual({ status: 'ok' });
  });
});
