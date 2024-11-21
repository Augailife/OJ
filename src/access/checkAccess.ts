/**
 * @param loginUser 登录用户
 * @param needAccess 需要权限
 * @return boolean 有无权限
 */
import accessEnum from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
  const loginAccess = loginUser?.role;

  if (loginAccess === accessEnum.NOT_LOGIN) {
    if (needAccess !== accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  if (loginAccess === accessEnum.USER) {
    if (needAccess === accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
