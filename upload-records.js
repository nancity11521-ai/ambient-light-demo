const shapeRecordList = document.querySelector("#shapeRecordList");
const shapeRecordCount = document.querySelector("#shapeRecordCount");
const recordTotal = document.querySelector("#recordTotal");
const shapeFolderFilter = document.querySelector("#shapeFolderFilter");
const shapeFolderNameInput = document.querySelector("#shapeFolderNameInput");
const renameShapeFolder = document.querySelector("#renameShapeFolder");

let uploadedShapeRecords = [];

function assertAuthorized() {
  const auth = localStorage.getItem("site_auth");
  const authTime = Number.parseInt(localStorage.getItem("site_auth_time") ?? "0", 10);
  const threeDays = 3 * 24 * 60 * 60 * 1000;

  if (auth !== "2026" || !authTime || Date.now() - authTime >= threeDays) {
    window.location.href = "./index.html";
  }
}

function saveUploadedShapeRecords() {
  localStorage.setItem("ambientLightUploadedShapes", JSON.stringify(uploadedShapeRecords.slice(0, 24)));
}

function loadUploadedShapeRecords() {
  try {
    uploadedShapeRecords = JSON.parse(localStorage.getItem("ambientLightUploadedShapes") ?? "[]").map((record) => ({
      ...record,
      folder: record.folder || "默认",
    }));
  } catch {
    uploadedShapeRecords = [];
  }
}

function getFolders() {
  return [...new Set(uploadedShapeRecords.map((record) => record.folder || "默认"))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function renderFolderFilter(selectedFolder) {
  const folders = getFolders();
  const currentFolder = folders.includes(selectedFolder) ? selectedFolder : "";

  shapeFolderFilter.innerHTML = '<option value="">全部文件夹</option>';
  folders.forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder;
    option.textContent = folder;
    option.selected = folder === currentFolder;
    shapeFolderFilter.append(option);
  });
  shapeFolderFilter.value = currentFolder;
  shapeFolderNameInput.value = currentFolder;
  shapeFolderNameInput.disabled = !currentFolder;
  renameShapeFolder.disabled = !currentFolder;
  return currentFolder;
}

function renderUploadedShapeRecords(preferredFolder = shapeFolderFilter.value) {
  const selectedFolder = renderFolderFilter(preferredFolder);
  const filteredRecords = selectedFolder
    ? uploadedShapeRecords.filter((record) => (record.folder || "默认") === selectedFolder)
    : uploadedShapeRecords;

  recordTotal.textContent = `${uploadedShapeRecords.length} records`;
  shapeRecordCount.textContent = selectedFolder ? `${filteredRecords.length}/${uploadedShapeRecords.length} records` : `${uploadedShapeRecords.length} records`;
  shapeRecordList.innerHTML = "";

  if (!filteredRecords.length) {
    shapeRecordList.innerHTML = '<div class="record-card"><span>暂无上传形状记录</span></div>';
    return;
  }

  filteredRecords.forEach((record) => {
    const card = document.createElement("div");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    const editGrid = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameText = document.createElement("span");
    const nameInput = document.createElement("input");
    const folderLabel = document.createElement("label");
    const folderText = document.createElement("span");
    const folderInput = document.createElement("input");
    const actions = document.createElement("div");
    const saveButton = document.createElement("button");
    const loadButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    card.className = "record-card";
    editGrid.className = "record-edit-grid";
    actions.className = "record-actions";
    title.textContent = record.name;
    detail.textContent = `${record.folder || "默认"} / ${new Date(record.createdAt).toLocaleString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    nameText.textContent = "图片名称";
    folderText.textContent = "所属文件夹";
    nameInput.type = "text";
    nameInput.value = record.name;
    nameInput.placeholder = "图片名称";
    folderInput.type = "text";
    folderInput.value = record.folder || "默认";
    folderInput.placeholder = "例如：三角形 / 客户A";
    saveButton.type = "button";
    saveButton.textContent = "保存";
    loadButton.type = "button";
    loadButton.textContent = "载入到调试台";
    deleteButton.type = "button";
    deleteButton.textContent = "删除";

    saveButton.addEventListener("click", () => {
      const nextName = nameInput.value.trim();
      const nextFolder = folderInput.value.trim() || "默认";

      if (!nextName) {
        nameInput.focus();
        return;
      }

      record.name = nextName;
      record.folder = nextFolder;
      saveUploadedShapeRecords();
      renderUploadedShapeRecords(nextFolder);
    });
    loadButton.addEventListener("click", () => {
      localStorage.setItem("ambientLightPendingShape", JSON.stringify(record));
      window.location.href = "./index.html";
    });
    deleteButton.addEventListener("click", () => {
      uploadedShapeRecords = uploadedShapeRecords.filter((item) => item.id !== record.id);
      saveUploadedShapeRecords();
      renderUploadedShapeRecords();
    });

    nameLabel.append(nameText, nameInput);
    folderLabel.append(folderText, folderInput);
    editGrid.append(nameLabel, folderLabel);
    actions.append(saveButton, loadButton, deleteButton);
    card.append(title, detail, editGrid, actions);
    shapeRecordList.append(card);
  });
}

function renameSelectedShapeFolder() {
  const currentFolder = shapeFolderFilter.value;
  const nextFolder = shapeFolderNameInput.value.trim() || "默认";

  if (!currentFolder || currentFolder === nextFolder) {
    return;
  }

  uploadedShapeRecords = uploadedShapeRecords.map((record) =>
    (record.folder || "默认") === currentFolder
      ? {
          ...record,
          folder: nextFolder,
        }
      : record,
  );
  saveUploadedShapeRecords();
  renderUploadedShapeRecords(nextFolder);
}

function boot() {
  assertAuthorized();
  loadUploadedShapeRecords();
  renderUploadedShapeRecords();
  shapeFolderFilter.addEventListener("change", renderUploadedShapeRecords);
  renameShapeFolder.addEventListener("click", renameSelectedShapeFolder);
}

boot();
