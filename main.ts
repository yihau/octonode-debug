import * as github from 'octonode';

(async () => {
  try {
    const c = github.client();
    const repo = c.repo("solana-labs/solana")
    // https://github.com/solana-labs/solana/pull/29509
    const pr = repo.pr(29509);
    const prFiles = await pr.filesAsync();
    console.log(prFiles[0].length)
  } catch (e) {
    console.log(e)
  }
})();
