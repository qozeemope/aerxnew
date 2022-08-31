// import Pools from "../components/Pools";
import Wallets from "../components/BranchWallet/tokenWallet";
import NewSendTokens from "../components/BranchWallet/NewSendTokens";
// import NewPool from "../components/BranchWallet/NewPool";
// import AddLiquidity from "../components/BranchWallet/AddLiquidity"
import CircleList from "../components/BranchWallet/CircleList";
import NewProfile from "../components/Profiles/NewProfile";

const WalletIndex = () => {
  const logo = "../aerx_logo-removebg-preview 1 (Traced)-1.svg";

  return (
    // <Pools/>
    <div>
      {/* <RecieveToken /> */}
      {/* <AddLiquidity /> */}
      {/* <CircleList /> */}
      {/* <NewProfile /> */}
      <NewSendTokens />
      {/* <NewPool /> */}
    </div>
  );
};

export default WalletIndex;
